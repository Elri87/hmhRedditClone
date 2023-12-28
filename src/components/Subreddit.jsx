export default function Subreddit() {
  return (
    <div className="create-sub-container">
      <h4>Create a community</h4>
      <hr />
      <h4>Name</h4>
      <p>Comunity names including capitalization cannont be changed.</p>
      <form>
        <input placeholder="r/" />
      </form>
      <p>21 Characters remaining</p>
      <label>Community type</label>
      <form>
        <input type="radio" />
        <label>Public</label>
        <input type="radio" />
        <label>Restricted</label>
        <input type="radio" />
        <label>Private</label>
      </form>
      <h4>Adult content</h4>
      <form>
        <input type="radio" />
        <label>18+ year old community</label>
      </form>
      <div>
        <button>Cancel</button>
        <button>Create Community</button>
      </div>
    </div>
  );
}
