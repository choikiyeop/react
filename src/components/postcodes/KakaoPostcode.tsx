import { useEffect, useRef, useState } from "react"

const id = "daum-postcode";
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

interface KakaoPostcodeProps {
  onClose: () => void;
}

/**
 * 카카오 우편번호 검색
 * https://postcode.map.daum.net/guide#attributes
 */
export default function KakaoPostcode({ onClose }: KakaoPostcodeProps) {
  const postcodeRef = useRef<HTMLDivElement>(null);
  const [postcode, setPostcode] = useState();

  const loadPostcode = () => {
    if (!document.getElementById(id)) {
      return new Promise((resolve, reject) => {
        if (!window?.daum?.Postcode) {
          const script = document.createElement("script");
          script.id = id;
          script.src = src;
          script.onload = () => resolve(window?.daum?.Postcode);
          script.onerror = (err) => reject(err);
          document.body.appendChild(script);
        }
      })
    }

    return new Promise((resolve, reject) => {
      if (window?.daum?.Postcode) {
        resolve(window.daum.Postcode);
      }
      reject("script를 추가해주세요");
    })
  }

  useEffect(() => {
    loadPostcode().then(postcode => {
      new postcode({
        width: "100%",
        oncomplete: (data) => {
          console.log(data);
          setPostcode(data);
          onClose();
        }
      }).embed(postcodeRef.current, {
        autoClose: false
      })
    })
  }, []);

  return (
    <div ref={postcodeRef} />
  )
}