import { redirect } from "react-router-dom"

export async function loader() {
    try{
        const url = `http://localhost:8001/`
        const cigar = await fetch(url, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }).then((response) => response.json());
          console.log(cigar)
          if (!Array.isArray(cigar)){
            throw Error("No")
          }
          return {User}
    } catch (error) {
        return redirect('/login')
    }
}
export default function User (){

    return (
        <>
            <h1>My Profile</h1>
        </>
    )
}