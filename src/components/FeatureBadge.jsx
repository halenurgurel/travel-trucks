const FeatureBadge = ({ icon, label }) => {
  return (
    <div className="text-text-dark bg-bg-light flex items-center gap-2 rounded-xl px-4 py-2">
      {icon} <span className="text-sm font-medium">{label}</span>
    </div>
  );
};
export default FeatureBadge;

//Kullanımı
/* 
{
  Object.entries(camper)
    .filter(([key, value]) => value === true && featureIcons[key])
    .map(([key]) => (
      <FeatureBadge
        key={key}
        icon={featureIcons[key].icon}
        label={featureIcons[key].label}
      />
    ));
}
*/
