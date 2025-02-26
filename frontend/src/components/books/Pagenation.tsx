export default function Pagenation(){
  return(
    <div className="w-full h-10 my-10">
      <div className="flex gap-5 justify-center items-center">
        <div className="w-8 h-8 bg-myblue text-white flex justify-center items-center font-bold cursor-pointer">
          <p>1</p>
        </div>
        <div className="w-8 h-8 text-myblue flex justify-center items-center font-semibold cursor-pointer hover:border-2 border-myblue">
          <p>2</p>
        </div>
        <div className="w-8 h-8 text-myblue flex justify-center items-center font-semibold cursor-pointer hover:border-2 border-myblue">
          <p>3</p>
        </div>
        <div className="w-8 h-8 text-myblue flex justify-center items-center font-semibold cursor-pointer hover:border-2 border-myblue">
          <p>4</p>
        </div>
      </div>
    </div>
  )
}