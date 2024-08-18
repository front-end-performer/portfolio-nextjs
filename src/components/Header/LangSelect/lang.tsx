import { NavbarContent, Select, SelectItem } from "@nextui-org/react";
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useParams} from 'next/navigation';
import {useRouter, usePathname} from '@/navigation';
import style from  "@/components/Header/LangSelect/lang.module.css";
import {Locale} from '@/types';

export default function Lang() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const langValues = [
    { key: "de", label: "DE" },
    { key: "en", label: "EN" },
  ];
  
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        {
          pathname,
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          params
        },
        {locale: nextLocale}
      );
    });
  }

  return (
    <NavbarContent as="div" justify="end" className={`${style.select} hidden md:flex max-w-[72px]`}>
      <Select
        items={langValues}
        variant="bordered"
        aria-label="lang"
        radius="none"
        defaultSelectedKeys={["de"]}
        className="max-w-xs"
        size="sm"
        onChange={onSelectChange}
      >
        {(animal) => <SelectItem key={animal.key}>{animal.label}</SelectItem>}
      </Select>
    </NavbarContent>
  );
}
