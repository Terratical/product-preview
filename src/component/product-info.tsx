import Button from "./button";

export default function ProductInfo() {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-4 rounded-[8px] p-8 min-[600px]:w-1/2 min-[600px]:justify-center">
      <div className="flex w-full flex-col gap-6">
        <span className="font-montserrat text-xs leading-[120%] tracking-[5px] text-(--text-muted) uppercase">
          Perfume
        </span>
        <h1 className="font-fraunces text-[2rem] leading-[100%] font-bold">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="font-montserrat text-sm leading-[160%] font-medium text-(--text-muted)">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>
      <div className="flex w-full items-center justify-start gap-4">
        <span className="font-fraunces text-primary text-[2rem] font-bold">
          $149.99
        </span>
        <span className="font-montserrat text-muted font-semibold line-through">
          $169.99
        </span>
      </div>
      <Button />
    </div>
  );
}
