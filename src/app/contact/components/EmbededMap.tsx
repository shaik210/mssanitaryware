import React from 'react'

const EmbededMap = () => {
  return (
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "80px",
  }}
>
  <iframe
    title="MS Sanitary Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5722179041463!2d78.40377357585514!3d17.384305683502372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb968cc8ea4213%3A0x4935385e01868e5b!2sM%20S%20Sanitary!5e0!3m2!1sen!2sin!4v1742463068374!5m2!1sen!2sin"
    width="80%"
    height="350"
    style={{ border: "8px solid transparent" }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>
  )
}

export default EmbededMap




