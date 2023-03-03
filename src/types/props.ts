/* ---------======= custom props ======--------- */

import { HealthManagerFormData } from "./forms";



/* ---------===== auth form props =====--------- */

export interface AuthFormProps {
  handleAuthEvt: () => void;
  updateMessage: (msg: string) => void;
  handleHealth: (formData: HealthManagerFormData) => void;
}
