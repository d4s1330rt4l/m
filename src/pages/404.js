import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Bulunamadı</h1>
    <p>Bulunamayan bir rota denediniz, burada üzüntüye yer yok...</p>
  </Layout>
)

export default NotFoundPage
