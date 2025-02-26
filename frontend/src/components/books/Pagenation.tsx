export default function Pagenation() {
  return (
    <div className="my-10 h-10 w-full">
      <div className="flex items-center justify-center gap-5">
        <div className="bg-myblue flex h-8 w-8 cursor-pointer items-center justify-center font-bold text-white">
          <p>1</p>
        </div>
        <div className="text-myblue border-myblue flex h-8 w-8 cursor-pointer items-center justify-center font-semibold hover:border-2">
          <p>2</p>
        </div>
        <div className="text-myblue border-myblue flex h-8 w-8 cursor-pointer items-center justify-center font-semibold hover:border-2">
          <p>3</p>
        </div>
        <div className="text-myblue border-myblue flex h-8 w-8 cursor-pointer items-center justify-center font-semibold hover:border-2">
          <p>4</p>
        </div>
      </div>
    </div>
  )
}
