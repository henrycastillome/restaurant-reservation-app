import Button from "./Button";

const Header = () => {
  return (
    <header>
      <div className="overlay">
        <div className="stack-vertical" style={{ width: "30%" }}>
          <h1 style={{ color: "var(--primary-color-yellow)" }}>Little Lemon</h1>
          <h6 style={{ color: "var(--secondary-color-white)" }}>Chicago</h6>
          <p style={{ color: "var(--secondary-color-white)" }}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div>
            <Button isPrimary>Reserve a table</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
