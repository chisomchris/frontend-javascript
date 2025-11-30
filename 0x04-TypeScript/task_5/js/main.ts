// Interface for MajorCredits
export interface MajorCredits {
  credits: number;
  _majorBrand: "major";  
}

// Interface for MinorCredits
export interface MinorCredits {
  credits: number;
  _minorBrand: "minor";   
}

// Function that sums MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "major",
  };
}

// Function that sums MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "minor",
  };
}
