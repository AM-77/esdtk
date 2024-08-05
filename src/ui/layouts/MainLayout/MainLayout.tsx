import { ReactNode } from 'react';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="flex bg-white w-full h-12 border-b">Top Bar</div>

      <div className="flex h-full overflow-hidden">
        <div className="flex w-12 h-full border-r bg-red-100"></div>
        <div className="flex w-full h-full bg-green-100">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
