import { keepPreviousData, useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useSearchAddress = (addressKeyword: string | undefined, exclude_place_ids) => {
  return useQuery({
    queryKey: ["searchAddress", exclude_place_ids],
    queryFn: () =>
      axios.get(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=kr&q=${encodeURIComponent(addressKeyword)}&exclude_place_ids=${encodeURIComponent(exclude_place_ids.join(","))}`)
        .then(res => {
          console.log(res.data)
          return res.data
        })
        .catch(err => console.log(err)),
    enabled: exclude_place_ids.length !== 0,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData
  })
}