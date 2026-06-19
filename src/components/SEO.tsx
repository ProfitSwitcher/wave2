import { useEffect } from "react"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
}

export function SEO({ 
  title = "Alvis WAVE Services | Water • Air • Voltage • Experts | Western Montana",
  description = "Alvis WAVE Services delivers dependable heating, cooling, plumbing, and electrical work to homes and small businesses across Western Montana. 24/7 emergency service available.",
  keywords = "HVAC, plumbing, electrical, heating, cooling, Missoula, Montana, home services",
  ogType = "website"
}: SEOProps) {
  useEffect(() => {
    document.title = title
    
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
    ]
    
    metaTags.forEach(({ name, property, content }) => {
      let meta = name 
        ? document.querySelector(`meta[name="${name}"]`)
        : document.querySelector(`meta[property="${property}"]`)
      
      if (!meta) {
        meta = document.createElement("meta")
        if (name) meta.setAttribute("name", name)
        if (property) meta.setAttribute("property", property)
        document.head.appendChild(meta)
      }
      
      meta.setAttribute("content", content)
    })
  }, [title, description, keywords, ogType])
  
  return null
}
