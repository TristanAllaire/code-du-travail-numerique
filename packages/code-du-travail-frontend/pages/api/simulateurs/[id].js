import heureRechercheEmploi from "@cdtn/simulateurs/heures-recherche-emploi.data.json";
import preavisDemission from "@cdtn/simulateurs/preavis-demission.data.json";
import preavisLicenciement from "@cdtn/simulateurs/preavis-licenciement.data.json";

const data = {
  "heure-recherche-emploi": heureRechercheEmploi,
  "preavis-demission": preavisDemission,
  "preavis-licenciement": preavisLicenciement,
};
export default (req, res) => {
  const {
    query: { id },
  } = req;
  switch (id) {
    case "preavis-demission":
    case "preavis-licenciement":
    case "heure-recherche-emploi":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data[id]));
      return;
    default:
      res.status(404).json({ message: "ressource not found" });
  }
};
