import Button from "./Button";
import Cards from "./Card";
import Reservations from "./Reservations";
import Testimonial from "./Testimonial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAlertContext } from "../context/alertContext";
import { Slide } from "react-awesome-reveal";



const plates = [
  {
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    getImageSrc: () => require("../images/greeksalad.png"),
    price: 12.99,
  },
  {
    title: "Bruschetta",
    description:
      "Our delicious bruschetta is made by grilling fresh bread until crispy, then topping it with a flavorful blend of garlic, salt, and olive oil.",
    getImageSrc: () => require("../images/bruschetta.png"),
    price: 5.99,
  },
  {
    title: "Lemon Dessert",
    description:
      "Indulge in our zesty lemon dessert, a perfect blend of tangy and sweet flavors, topped with whipped cream and a sprinkle of lemon zest. ",
    getImageSrc: () => require("../images/cheesecake.png"),
    price: 4.99,
  },
];

const testimony = [
  {
    name: "Janetter Harper",
    title: "Authentic Mediterranean Cuisine",
    review: `I visited Little Lemon last night for the first time and was blown away by the food. 
                The hummus was creamy and full of flavor, the lamb kebab was cooked to perfection and the baklava was the best 
                I've ever had. The atmosphere was cozy and welcoming and the service was impeccable. I highly recommend this 
                restaurant to anyone looking for authentic Mediterranean cuisine.`,
    getImageSrc: "https://i.pravatar.cc/150?img=48",
  },
  {
    name: "John Smith",
    title: "An overall wonderful and rewarding experience",
    review: `I had an amazing experience at Little Lemon last night. The staff was friendly and attentive and the food was delicious.
               I ordered the mixed grill and it was cooked perfectly, with each meat being juicy and tender. 
               The portions were generous and the presentation was beautiful. I also appreciated that they had plenty 
               of vegetarian and vegan options. Overall, it was a fantastic dining experience and I will definitely be returning.`,
    getImageSrc: "https://i.pravatar.cc/150?img=16",
  },
  {
    name: " Ahmed Patel",
    title: "Wonderful Mediterranean Dining Experience",
    review: `I had the pleasure of dining at Little Lemon last night and it was a wonderful experience. 
      The food was exceptional and authentic, with fresh ingredients and bold flavors. I highly recommend the moussaka and the grilled octopus.
       The service was top-notch, with the staff being friendly and knowledgeable about the menu. 
       The ambiance was also very pleasant, with a beautiful decor and a relaxing atmosphere. 
       Overall, Little Lemon is a must-visit restaurant for anyone looking for an unforgettable Mediterranean dining experience`,
    getImageSrc: "https://i.pravatar.cc/150?img=18",
  },
  {
    name: "Henry",
    title: "The best experience",
    review:
      "First time having mediterranean food, and now I want to eat there every day",
    getImageSrc: "https://i.pravatar.cc/150?img=2",
  },
];

const Main = () => {
  const { alertWarning } = useAlertContext();

  return (
    <main>
      <Slide cascade >
      <div className="stack-horizontal" style={{ width: "100%", gap: "2rem" }}>
        <h1
          id="specials-section"
          style={{ color: "var(--primary-color-green)" }}
        >
          Specials
        </h1>
        <div>
          <Button onClick={alertWarning}>Order Now</Button>
          <ToastContainer style={{ color: "red" }} />
        </div>
      </div>
      </Slide >
      <Slide direction={'right'} >
      <div className="stack-horizontal" style={{ padding: "2rem" }}>
        {plates.map((plate) => (
          
          <Cards
            key={plate.title}
            title={plate.title}
            description={plate.description}
            imageSrc={plate.getImageSrc()}
            price={plate.price}
          />
          
        ))}
      </div>
      </Slide>
      
      <div className="testimonials">
      <Slide >
        <h1 id="reviews-section">Testimonials</h1>
        </Slide>
        <Slide direction={'right'} >
        <div
          className="stack-horizontal"
          style={{
            gap: "2rem",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {testimony.map((testimonies) => (
            <Testimonial
              key={testimonies.title}
              name={testimonies.name}
              title={testimonies.title}
              review={testimonies.review}
              imageSrc={testimonies.getImageSrc}
            />
          ))}
        </div>
        </Slide>
      </div>
      <Reservations />
    </main>
  );
};

export default Main;
