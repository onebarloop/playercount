import type { Ref } from 'vue';

export function formWarning(msg: string, ref: Ref<string>) {
  ref.value = msg;
  setTimeout(() => {
    ref.value = '';
  }, 2000);
}
