

export default function JavascriptPage() {

  const peoples = [
    { name: "John", age: 2 },
    { name: "Jane", age: 19 },
    { name: "Jeff", age: 69 },
  ]

  const adultsOnly = ({ age }) => {
    if (age < 7) return 'kid';
    if (age < 21) return 'adolescent';
    return 'adult';
  }

  const handlePeoples = () => {
    const organized = Object.groupBy(peoples, adultsOnly)
    console.log(organized)
  }

  return (
    <div>
      <button onClick={handlePeoples}>조건에 따라 배열 그룹 짓기</button>
    </div>
  )
}