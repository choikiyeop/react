import KakaoPostcode from "@/components/postcodes/KakaoPostcode";
import OpenstreetmapPostcode from "@/components/postcodes/OpenstreetmapPostcode";

export default function PostCodePage() {

  return(
    <div>
      <KakaoPostcode onClose={() => {}} />
      <OpenstreetmapPostcode />
    </div>
  )
}