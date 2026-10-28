import { useState, useEffect, useRef } from "react"

function useIntersectNode(items, rootMargin, threshold) {
  const [activeNode, setActiveNode] = useState(null)

  let observer = useRef(null)

  useEffect(
    _ => {
      observer.current = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 1)
              setActiveNode(entry.target.getAttribute("id"))
          })
        },
        {
          root: null,
          rootMargin,
          threshold,
        }
      )

      items.forEach(item => {
        if (item !== "#") {
          const target = document.getElementById(item.slice(1))
          if (target) observer.current.observe(target)
        }
      })

      return _ => {
        if (observer.current) observer.current.disconnect()
      }
    },
    [activeNode, items, rootMargin, threshold]
  )

  return [activeNode]
}

export default useIntersectNode
