import api from "@/api/index.ts"

export async function getBooks(){
  try{
    const response = await api.get("/books")
    if(response.data.success){
      return response.data.data
    } else{
      console.log(response.data.message)
      return []
    }
  } catch(error) {
    console.log(error)
    return []
  }
}