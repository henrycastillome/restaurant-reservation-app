const Main = () => {
  return (
    <main>
      <div className="specials">
        <button> Online Menu</button>
        <div className="stack-horizontal">
          <div className="card">
            <img
              src="https://picsum.photos/200/300/?blur "
              alt="image place holder"
              style={{ width: "100%" }}
            />
            <h4>
              <b>Food name </b>
            </h4>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>

            <a href="#">Order a delivery</a>
          </div>

          <div className="card">
            <img
              src="https://picsum.photos/200/300/?blur "
              alt="image place holder"
              style={{ width: "100%" }}
            />
            <h4>
              <b>Food name </b>
            </h4>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>

            <a href="#">Order a delivery</a>
          </div>

          <div className="card">
            <img
              src="https://picsum.photos/200/300/?blur "
              alt="image place holder"
              style={{ width: "100%" }}
            />
            <h4>
              <b>Food name </b>
            </h4>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>

            <a href="#">Order a delivery</a>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h1> Testimonials</h1>
        <div className="stack-horizontal">
          <div className="stack-horizontal">
            <div className="card" style={{}}>
              <h6>Rating</h6>
              <div className="stack-horizontal">
                <img
                  src="https://picsum.photos/id/1/200/300"
                  style={{ width: "50%", objectFit: "cover" }}
                />
                <h4>name</h4>
              </div>
              <p>review text</p>
            </div>
          </div>

          <div className="stack-horizontal">
            <div className="card" style={{}}>
              <h6>Rating</h6>
              <div className="stack-horizontal">
                <img
                  src="https://picsum.photos/id/1/200/300"
                  style={{ width: "50%", objectFit: "cover" }}
                />
                <h4>name</h4>
              </div>
              <p>review text</p>
            </div>
          </div>

          <div className="stack-horizontal">
            <div className="card" style={{}}>
              <h6>Rating</h6>
              <div className="stack-horizontal">
                <img
                  src="https://picsum.photos/id/1/200/300"
                  style={{ width: "50%", objectFit: "cover" }}
                />
                <h4>name</h4>
              </div>
              <p>review text</p>
            </div>
          </div>
        </div>
      </div>

      <div className="history">
        <div className="stack-horizontal">
                <div className="stack-vertical">
                    <h1>Little Lemon</h1>
                    <h6>Chicago</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button> Reservations a table</button>
                </div>

                

                    <img src="https://picsum.photos/200/300?grayscale" alt='placeholder' />
                

        </div>
      </div>
    </main>
  );
};

export default Main;
