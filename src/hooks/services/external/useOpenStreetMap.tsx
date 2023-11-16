import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useSearchAddress = (addressKeyword: string | undefined) => {
  return useQuery({
    queryKey: ["searchAddress"],
    queryFn: () =>
      axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=대한민국,${encodeURIComponent(addressKeyword)}`)
        .then(res => res.data)
        .catch(err => console.log(err)),
    enabled: false,
  })
}