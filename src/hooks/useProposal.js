import { useEffect, useMemo, useState } from "react";

export function useProposal(plan, offer) {
  const isOfferAvaliable = offer?.duration && offer.duration > 0;
  const [offerAvailability, setOfferAvailability] = useState(isOfferAvaliable);

  useEffect(() => {
    if (!isOfferAvaliable) {
      return () => {};
    }

    const timer = setTimeout(() => {
      setOfferAvailability(false);
    }, offer.duration * 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [isOfferAvaliable, offer.duration]);

  return useMemo(() => {
    if (offerAvailability) {
      return {
        ...offer,
        isOffer: true,
      };
    }

    return {
      ...plan,
      isOffer: false,
    };
  }, [offer, plan, offerAvailability]);
}