import { ComponentProps } from 'react';
import CssHeading from 'src/components/CssHeading';
import { CredentialConfig } from 'src/configs/constance';
import Item from './item';

export default function Certification(params: ComponentProps<'div'>) {
  return (
    <div {...params} id="certification" className="container">
      <CssHeading title="certifications" className="cursor-pointer" />
      <div className="mt-12 grid grid-cols-12 gap-4">
        {CredentialConfig.map((item) => {
          return (
            <div key={item.id} className="col-span-12 h-fit md:col-span-6">
              <Item {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
