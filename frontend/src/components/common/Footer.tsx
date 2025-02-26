export default function Footer() {
  return (
    <div className="h-fit w-full pt-5 pb-5 pl-5">
      <p className="text-myred font-semibold">BlueBook Corp.</p>
      <div className="text-myblue pt-2 font-light">
        <p>02-123-1234</p>
        <p>서울특별시 종로구 123번길 12</p>
      </div>
      <p className="text-myblue font-semibold pt-5">Developer</p>
      <div className="text-myblue font-light flex gap-3">
        <p>Ban JaeYeong</p>
        <a href="github.com/baaanjy">🔗 github.com/baaanjy</a>
      </div>
    </div>
  )
}
