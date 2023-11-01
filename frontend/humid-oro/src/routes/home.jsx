import { redirect } from "react-router-dom"

export async function loader() {
    try{
        const url = `http://localhost:8000/cigar`
        const cigar = await fetch(url, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }).then((response) => response.json());
          console.log(cigar)
          if (!Array.isArray(cigar)){
            throw Error("No")
          }
          return {Home}
    } catch (error) {
        return redirect('/login')
    }
}
export default function Home (){

    return (
        <>
            <h1>HOME</h1>
        </>
    )
}