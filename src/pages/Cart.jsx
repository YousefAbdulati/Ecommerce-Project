import { useDispatch, useSelector } from "react-redux";
import { decreaseByOne, increaseByOne } from "../store/slices/cartItems";
import translations from "../components/translations"; 


export default function Cart() {
  const itemsObject = useSelector((state) => state.cartItems.items);
  const dispatch = useDispatch();
  const AllItems = Object.values(itemsObject);
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const t = translations[currentLanguage]; 

  return (
      <div className="container justify-content-center">
              <h3 className=" text-center">{t.cartTitle}</h3>

            {AllItems.map((item) => (
              <div className="card rounded-3 mb-4" key={item.id}>
                <div className="card-body p-3">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={item.images[0]}
                        className="img-fluid rounded-3"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">{item.title}</p>
                      <p>
                        <span className="text-muted">Rating: </span>
                        {item.rating}
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={() => dispatch(decreaseByOne(item.id))}
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-link px-2"
                        onClick={() => dispatch(increaseByOne(item.id))}
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">{item.price*item.quantity} $</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i className="fas fa-trash fa-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
  );
}
