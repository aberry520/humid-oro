import { NavBar } from "../components/Nav/NavBar";

export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <h1>Oh no! An error occured!</h1>
      <h2>
        Please tell us what went wrong so that we can make your humid-oro
        experience better!
      </h2>
      <form>
        <textarea
          name="error"
          placeholder="Report Issue Here"
          rows="10"
          cols="50"
          required
        />
        <br />
        <button type="button">Submit</button>
      </form>
    </>
  );
}
