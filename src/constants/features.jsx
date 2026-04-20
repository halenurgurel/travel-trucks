import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";
import MicrowaveOutlinedIcon from "@mui/icons-material/MicrowaveOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import RadioOutlinedIcon from "@mui/icons-material/RadioOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import GasMeterOutlinedIcon from "@mui/icons-material/GasMeterOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import DirectionsBusOutlinedIcon from "@mui/icons-material/DirectionsBusOutlined";

export const formLabels = {
  alcove: "Alcove",
  panelTruck: "Panel Truck",
  fullyIntegrated: "Fully Integrated",
};

export const featureIcons = {
  form: { icon: <DirectionsBusOutlinedIcon />, label: "form" },
  transmission: {
    icon: <DirectionsCarFilledOutlinedIcon />,
    label: "transmission",
  },
  engine: { icon: <LocalGasStationOutlinedIcon />, label: "engine" },
  AC: { icon: <AcUnitOutlinedIcon />, label: "AC" },
  bathroom: { icon: <WcOutlinedIcon />, label: "bathroom" },
  kitchen: { icon: <SoupKitchenOutlinedIcon />, label: "kitchen" },
  TV: { icon: <TvOutlinedIcon />, label: "TV" },
  radio: { icon: <RadioOutlinedIcon />, label: "radio" },
  refrigerator: { icon: <KitchenOutlinedIcon />, label: "refrigerator" },
  microwave: { icon: <MicrowaveOutlinedIcon />, label: "microwave" },
  gas: { icon: <GasMeterOutlinedIcon />, label: "gas" },
  water: { icon: <WaterDropOutlinedIcon />, label: "water" },
};
