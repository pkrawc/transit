import fetch from "node-fetch"

const apiKey = "iX8ztmhTKsrgQsi4wZWRYMaeg"

export default async function handler(req, res) {
  const {
    query: { id },
  } = req
  const url = `http://www.ctabustracker.com/bustime/api/v2/getvehicles?key=${apiKey}&format=json&rt=${id}`
  try {
    const response = await fetch(url).then((res) => res.json())
    res.json(response)
  } catch (error) {
    res.json({ error })
  }
}
