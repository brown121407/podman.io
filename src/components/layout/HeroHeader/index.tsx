import React from 'react';
import { Icon } from '@iconify/react';
import Button from '@site/src/components/utilities/Button';
import DropdownButton from '@site/src/components/utilities/DropdownButton';
import Link from '@site/src/components/utilities/Link';
import WaveBorder from '@site/src/components/shapes/WaveBorder';

export default function HeroHeader({ title, subtitle, release, image, platforms }) {
  const detectOperatingSystem = () => {
    return window.navigator.userAgent
      .toLowerCase()
      .split(' ')
      .filter(item => item.includes('linux' || 'windows' || 'macos'));
  };

  const windows = {
    title: 'Download for Windows',
    subtitle: 'Install on Desktop',
    icon: 'fa-brands:windows',
    options: [],
    path: 'https://github.com/containers/podman-desktop/releases/download/v0.13.0/podman-desktop-0.13.0-setup.exe',
    other: {
      path: 'https://podman-desktop.io/downloads',
      text: 'Other Install Options',
      subtext: '(Including Windows portable executable and other OS options)',
      icon: 'material-symbols:arrow-circle-right-rounded',
    },
  };
  const mac = {
    title: 'Download for macOS',
    subtitle: 'Universal *.dmg',
    icon: 'fa-brands:apple',
    options: [],
    path: 'https://github.com/containers/podman-desktop/releases/download/v0.13.0/podman-desktop-0.13.0-universal.dmg',
    other: {
      path: 'https://podman-desktop.io/downloads',
      text: 'Other Install Options',
      subtext: '(Including macOS Intel & Arm builds and other Os options)',
      icon: 'material-symbols:arrow-circle-right-rounded',
    },
  };
  const linux = {
    title: 'Download for Linux',
    subtitle: 'Install on Desktop',
    icon: 'fa-brands:linux',
    options: [{ path: 'https://podman.io/getting-started/installation#installing-on-linux', text: 'CLI Install' }],
    path: 'https://github.com/containers/podman-desktop/releases/download/v0.13.0/podman-desktop-0.13.0.flatpak',
    other: {
      path: 'https://podman-desktop.io/downloads',
      text: 'Other Install Options',
      subtext: '(Including binary tar.gz and other OS options)',
      icon: 'material-symbols:arrow-circle-right-rounded',
    },
  };
  type InstallOptionProps = Card & {
    icon: string;
    options: Link[];
    path: string;
    other: { path: string; text: string; subtext: string; icon: string };
  };
  const InstallOption = (props: InstallOptionProps): JSX.Element => {
    return (
      <section>
        <div>
          <a href={props.path}>
            <Icon icon={props.icon} />
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
          </a>
        </div>
        <div>
          <a href={props.other.path}>
            <div>
              <h4>{props.other.text}</h4>
              <Icon icon={props.other.icon} />
            </div>
            <p>{props.other.subtext}</p>
          </a>
        </div>
      </section>
    );
  };

  const downloadData = {
    buttonText: 'Downloads',
    Options: [InstallOption(windows), InstallOption(mac), InstallOption(linux)],
  };
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900">
      <div className="grid md:grid-cols-2 md:gap-12">
        <div className="container row-span-2 mb-4 mt-12 place-self-center md:mb-0 md:ml-10 xl:ml-24">
          <h1 className="mb-4 text-white dark:text-gray-50 lg:mb-8">{title}</h1>
          <p className="max-w-sm text-white dark:text-gray-50 lg:max-w-prose">{subtitle}</p>
          <div className="my-3 flex max-w-sm gap-8">
            <Button as="link" text="Get Started" path="#" />
            <DropdownButton />
          </div>
          <p className="flex gap-4 text-white dark:text-gray-100">
            <span>
              Latest stable <Link {...release} textColor="text-white dark:text-gray-100" />
            </span>
            <span>-</span>
            <Link
              text="Apache License 2.0"
              path="https://www.apache.org/licenses/LICENSE-2.0"
              textColor="text-white dark:text-gray-100"
            />
          </p>
        </div>

        <div className="flex flex-col justify-end self-end md:col-start-2 md:row-span-3 lg:row-span-2 lg:row-start-2">
          <div className="container mb-12 flex flex-col items-end md:mb-0 md:max-w-lg lg:max-w-full 2xl:pr-8">
            <h3 className="text-base font-medium text-white dark:text-gray-100">{platforms[0]}</h3>
            <ul className="flex gap-4">
              {platforms.slice(1).map((icon, index) => {
                return (
                  <li key={index}>
                    <Icon icon={icon} className="text-3xl text-white dark:text-gray-100" />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="-mb-23 hidden justify-end md:flex lg:mb-12 lg:w-[510px] 2xl:w-full">
            <img src={image.path} alt={image.alt} className="object-cover" />
          </div>
        </div>
        <WaveBorder grid="col-span-full lg:row-start-3" />
      </div>
    </header>
  );
}