'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';
import GlowingEffect from 'src/components/aceternity/glowing-effect';
import ColorfulBox from 'src/components/box/ColorfulBox';
import { DiamondIcon, RocketIcon } from 'src/components/icons';
import { CredentialType } from 'src/globals';

type InfoComponentProps = {
  credentialId: string;
  credentialUrl: string;
  skills: CredentialType['skills'];
  issueDate: CredentialType['issueDate'];
} & ComponentProps<'div'>;

function InfoComponent(params: InfoComponentProps) {
  const { credentialId, credentialUrl, skills, issueDate, ...props } = params;
  const { month, year } = issueDate;

  function onScrollClick(id: string) {
    const element = document.getElementById(id);
    const position = element?.getBoundingClientRect();
    if (position && typeof window !== 'undefined') {
      window.scrollTo({
        left: position.left,
        top: position.top + window.scrollY - 60,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div {...props}>
      <Link href={credentialUrl} target="_blank" rel="noreferrer">
        <p className="text-gray-50">{`Issued ${month} ${year}`}</p>
        <p className="text-gray-50">{`Credential ID ${credentialId}`}</p>
      </Link>
      <Link href={credentialUrl} target="_blank" rel="noreferrer">
        <ColorfulBox color="gray" className="mt-4 mb-2">
          <div className="inline-flex flex-nowrap items-center gap-x-2">
            <p className="text-gray-50">Show credential</p>
            <RocketIcon width={16} height={16} />
          </div>
        </ColorfulBox>
      </Link>
      <div className="flex items-center gap-x-1">
        <DiamondIcon width={16} height={16} />
        <div className="flex items-center gap-x-4">
          {skills.map((skill) => {
            return (
              <button
                key={skill.id}
                className="hover-text text-gray-50"
                onClick={() => onScrollClick(`skill-${skill.id}`)}
              >
                {skill.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type Props = CredentialType;

export default function Item(params: Props) {
  const { id, name, credentialId, credentialUrl, skills, issueDate, issuingOrganization } = params;
  const { icon, name: nameOrganization } = issuingOrganization;

  return (
    <div
      id={`certification-${id}`}
      className="credential-magical-item relative border border-gray-100 p-4"
    >
      <GlowingEffect />
      <div className="credential-item">
        <div className="credential-item-item1">
          <Link href={credentialUrl} target="_blank" rel="noreferrer">
            <Image src={icon} alt={nameOrganization} className="h-12 w-12" />
          </Link>
        </div>
        <div className="credential-item-item2">
          <Link href={credentialUrl} target="_blank" rel="noreferrer">
            <p className="hover-text font-semibold">{name}</p>
            <p>{nameOrganization}</p>
          </Link>
          <InfoComponent
            className="credential-info-component"
            credentialId={credentialId}
            credentialUrl={credentialUrl}
            skills={skills}
            issueDate={issueDate}
          />
        </div>
      </div>
      <InfoComponent
        className="credential-info-component-small"
        credentialId={credentialId}
        credentialUrl={credentialUrl}
        skills={skills}
        issueDate={issueDate}
      />
    </div>
  );
}
