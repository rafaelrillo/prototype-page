import { Button, buttonVariants } from "@/components/ui/button";
import { NavigationMenuDemo } from "@/components/navmenu";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '50px', padding: '20px' }}>
        <h2>Prototype Page</h2>
        <NavigationMenuDemo />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>

        <h2>Buttons</h2>
      <div style={{width: '50%', display: 'flex', flexDirection: 'column', gap: '30px'}}>

        <Button variant="outline">Button</Button>
        <Button variant="default">Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="secondary">Button</Button>
      </div>

      </div>
      <Link href="/" className={buttonVariants()}>Go back</Link>

    </div>
  );
}
