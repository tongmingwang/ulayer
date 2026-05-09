import { withInstallComponent } from '@/utils/install';
import UCard from './src/UCard.vue';
import UCardText from './src/UCardText.vue';
import UCardTitle from './src/UCardTitle.vue';

const CardText = withInstallComponent(UCardText);
const Card = withInstallComponent(UCard);
const CardTitle = withInstallComponent(UCardTitle);
export { UCard, CardText, Card, UCardText, CardTitle, UCardTitle };
