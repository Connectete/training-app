export const SanitizedDate = (dateStr: string): Date => {
  const date = new Date(dateStr);
  return date;
};

export const FloatWeight = (weight: number): number => {
  if (!isNaN(weight)) {
    return parseFloat(weight.toFixed(1));
  } else {
    return 0;
  }
};

export const MaxWeight = (weight: number): number => {
  if (!isNaN(weight)) {
    if (weight >= 0 && weight < 1000) {
      return weight;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};
export const MissWeight = (weight: number): number => {
  if (!isNaN(weight)) {
    if (weight >= 0) {
      return weight;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};
