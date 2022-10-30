import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = () => (
  <Layout>
    <h1>404 Not Found :(</h1>
    <p>Te equivocaste, volve</p>
    <form action="https://blog.faculerena.com.ar">
    <input type="submit" value="Volver" />
</form>

  </Layout>
)

export default NotFound
