import { Menu } from 'src/components/menu/Menu';
import { EXPUDV } from 'src/components/menu/menu.data';

export function ExpUDV() {
  return (
    <div className="flex gap-[16px]">
      <Menu menu={EXPUDV} orientation="horizontal" />
    </div>
  );
}
