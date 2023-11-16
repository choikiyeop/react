import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useSearchAddress } from "@/hooks/services/external/useOpenStreetMap";
import Spinner from "../spinners/Spinner";

export default function OpenstreetmapPostcode() {
  const [addressKeyword, setAddressKeyword] =useState<string>();
  const { data: addressList, refetch: refetchAddressList, isFetched: isAddressListFetched, isFetching: isAddressListFetching } = useSearchAddress(addressKeyword);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressKeyword(e.target.value);
  }

  const search = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      refetchAddressList();
      console.log(addressList)
    }
  }

  const selectAddress = () => {
    console.log(addressList);
  }

  return(
    <div>
      <input placeholder="예) 판교역로 166, 분당 주공, 백현동 532" onChange={handleInput} onKeyDown={search} className="w-full h-[46px] border-b border-black text-[18px] pr-[65px] pl-[15px] outline-none placeholder:text-lg" />
      <div>
        {isAddressListFetched? (
          <ul className="w-full">
            {addressList?.map((address, index) => (
              <li key={index} className="h-11 overflow-hidden bg-white border-b cursor-pointer leading-[44px]">
                <button onClick={selectAddress} className="text-[13px] pr-[60px] pl-[9px]">{address.display_name}</button>
              </li>
            ))}
          </ul>
        ):(
          <div className="px-[29px] py-[39px] border-b border-gray-300">
            <h2 className="w-6 h-5 font-bold text-xl mb-3">tip</h2>
            <p className="text-sm mb-3">아래와 같은 조합으로 검색을 하시면더욱 정확한 결과가 검색됩니다.</p>
            <p className="text-sm">도로명 + 건물번호</p>
            <span className="text-[13px] text-[#008bd3]">예) 판교역로 166, 제주 첨단로 242</span>
            <p className="text-sm  mt-2">지역명(동/리) + 번지</p>
            <span className="text-[13px] text-[#008bd3]">예) 예) 백현동 532,  제주 영평동 2181</span>
            <p className="text-sm  mt-2">지역명(동/리) + 건물명(아파트명)</p>
            <span className="text-[13px] text-[#008bd3]">예) 분당 주공,  연수동 주공3차</span>
            <p className="text-sm  mt-2">사서함명 + 번호</p>
            <span className="text-[13px] text-[#008bd3]">예) 분당우체국사서함 1~100</span>
          </div>
        )}
        {isAddressListFetching && <Spinner />}
      </div>
    </div>
  )
}