import { Vue } from 'vue-property-decorator';
import {ModelManager} from '@/utils/ModelManager';
import {StaticObjectLoader} from '@/utils/StaticObjectLoader';

declare module 'vue-property-decorator' {
  interface Vue {
    $navigateTo(...args: any[]);
    $navigateBack(...args: any[]);
    $showModal(...args: any[]);
    $closeModal(...args: any[]);
    $modelManager: ModelManager;
    $sol: StaticObjectLoader;
  }
}
