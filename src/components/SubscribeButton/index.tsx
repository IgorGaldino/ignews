import styles from "./styles.module.scss";

interface SubscribeBurronProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeBurronProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
