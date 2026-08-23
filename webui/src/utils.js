import { isKsuWebui } from 'kernelsu-alt';

export function isDev() {
    return import.meta.env.DEV && !isKsuWebui();
}
