import { Vue } from 'vue-property-decorator';
import {ModelManager} from '@/components/ModelManager';
import {StaticObjectLoader} from '@/components/StaticObjectLoader';

declare module 'vue-property-decorator' {
    interface Vue {
        $navigateTo(...args: any[]);
        $modelManager: ModelManager;
        $sol: StaticObjectLoader;
    }
}