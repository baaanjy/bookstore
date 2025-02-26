import Tooltip from "./Tooltip";

export default function EditDeleteBtns(){
  return(
    <>
      <Tooltip text="수정">
        <button className="w-6 h-6 cursor-pointer">
          <img src="/icons/setting.svg" alt="수정" className="w-full h-full"/>
        </button>
      </Tooltip>
      <Tooltip text="삭제">
        <button className="w-6 h-6 cursor-pointer">
          <img src="/icons/delete.svg" alt="삭제" className="w-full h-full"/>
        </button>
      </Tooltip>
    </>
  )
}