const colors = [
  { light: "#FFE5E5", dark: "#8B0000" }, // Light Red / Dark Red
  { light: "#E6F5E6", dark: "#006400" }, // Light Green / Dark Green
  { light: "#D0E7FF", dark: "#00008B" }, // Light Blue / Dark Blue
  { light: "#E0E7FF", dark: "#4B0082" }, // Light Indigo / Dark Indigo
  { light: "#F3E5F5", dark: "#4B0082" }, // Light Purple / Dark Purple
  { light: "#FFE4E1", dark: "#800000" }, // Light Pink / Dark Pink
  { light: "#E0F7FA", dark: "#008080" }, // Light Teal / Dark Teal
  { light: "#F9FBE7", dark: "#556B2F" }, // Light Lime / Dark Lime
  { light: "#E0FFFF", dark: "#008B8B" }, // Light Cyan / Dark Cyan
  { light: "#FFE4E9", dark: "#8B0000" }, // Light Rose / Dark Rose
  { light: "#FFF8E1", dark: "#FF8C00" }, // Light Amber / Dark Amber
  { light: "#EDE7F6", dark: "#9400D3" }, // Light Violet / Dark Violet
  { light: "#E0F7FA", dark: "#006064" }, // Light Sky / Dark Sky
];

export const getRandomBGcolor = () => {
  const randomNum = Math.floor(Math.random() * colors.length);

  return colors[randomNum];
};
