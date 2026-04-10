import CartIcon from "@/assets/images/icon-cart.svg";

export default function Button() {
  return (
    <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-(--primary) py-4 text-white hover:bg-(--primary-accent)">
      <img className="max-h-4.5" src={CartIcon} alt="" />
      <span>Add to Cart</span>
    </button>
  );
}
