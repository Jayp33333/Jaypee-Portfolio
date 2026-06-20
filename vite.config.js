import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only plugin: runs the serverless /api/chat handler during `npm run dev`
// so the chat works without needing `vercel dev`.
function devApiPlugin(env) {
  return {
    name: 'dev-api-chat',
    configureServer(server) {
      // Make .env.local values available to the handler.
      Object.assign(process.env, env)

      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          return res.end('Method not allowed')
        }

        let raw = ''
        req.on('data', (chunk) => (raw += chunk))
        req.on('end', async () => {
          try {
            req.body = raw ? JSON.parse(raw) : {}
            const shim = {
              statusCode: 200,
              setHeader: (k, v) => res.setHeader(k, v),
              status(code) {
                this.statusCode = code
                return this
              },
              json: (obj) => {
                res.statusCode = shim.statusCode
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(obj))
              },
            }
            const { default: handler } = await server.ssrLoadModule('/api/chat.js')
            await handler(req, shim)
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Dev handler error', detail: String(err) }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), devApiPlugin(env)],
  }
})
