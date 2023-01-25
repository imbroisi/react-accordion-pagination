import { fireEvent, render, screen } from '@testing-library/react';
import ItemFormatter from 'components/FarrmerTable/Content/ItemFormatter';
import SubitemFormatter from 'components/FarrmerTable/Content/SubitemFormatter';
import SubitemHeader from 'components/FarrmerTable/Content/SubitemHeader';
import Accordion from '../Accordion';

const apiData = [
  {
    id: 'f873e8be-d489-4259-8c94-417bc4f136f0',
    itemData: [
      'Evan Boyle',
      '$ 956,743,664.08',
      'Ready',
      '2023-10-31'
    ],
    subItemsData: [
      [
        '0437c1ec-39ec-4eae-abe8-34626e112709',
        'Paper Doll',
        '135,928,025.56',
        'seeds',
        '2023-06-20'
      ],
      [
        'c2d7af43-b152-40b1-94dc-c7379496e1e7',
        'Don\'t You Want Me',
        '820,815,638.52',
        'seeds',
        '2023-10-31'
      ]
    ],
  },
  {
    id: '60a5ca0b-27c8-42be-8bc0-8bdfe4360300',
    itemData: [
      'Thomas Ledner',
      '$ 1,156,884,189.47',
      'Draft',
      '2023-05-13'
    ],
    subItemsData: [
      [
        '3698d19e-fb4b-4978-b6f6-843f4294ac63',
        'The Thing',
        '570,021,466.16',
        'chemicals',
        '2023-11-13'
      ],
      [
        '80d5a21c-b332-4ee2-8a8d-8a0ec2ef7a24',
        'Umbrella',
        '532,786,707.06',
        'fertilizer',
        '2023-09-25'
      ],
      [
        '42d08d56-6743-49e7-bf68-114946bd57ef',
        'Bette Davis Eyes',
        '54,076,016.25',
        'chemicals',
        '2023-05-13'
      ]
    ]
  }
];

const content = apiData.map(({ id, itemData, subItemsData }) => {
  return {
    id,
    item: <ItemFormatter id={id} data={itemData} />,
    subItems: subItemsData.map((data: any) => <SubitemFormatter key={data[0]} data={data} />),
    subItemsHeader: <SubitemHeader />,
  };
});

describe('Acordion tests', () => {
  it('renders Accordion', () => {
    render(
      <div className="w-full">
        <Accordion content={content} />
      </div>
    );

    apiData.forEach((data) => {
      data.itemData.forEach((item) => {
        const text = screen.getAllByText(item);
        expect(text[0]).toBeInTheDocument();  
      });
      data.subItemsData.forEach((subitem) => {
        subitem.forEach((value, index) => {
          if (index === 0) {
            return;
          }
          const text = screen.getAllByText(value);
          expect(text[0]).toBeInTheDocument();  
        });
      });
    });
  });

  it('Arrows up and down', () => {
    render(
      <div className="w-full">
        <Accordion content={content} />
      </div>
    );

    const dowmArrow = screen.queryAllByTestId('downarrow-testid');
    expect(dowmArrow.length).not.toBe(0);

    let upArrow = screen.queryAllByTestId('uparrow-testid');
    expect(upArrow.length).toBe(0);

    fireEvent.click(dowmArrow[0]);
    upArrow = screen.queryAllByTestId('uparrow-testid');
    expect(upArrow.length).not.toBe(0);
  });

  it('Right Menu', () => {
    render(
      <div className="w-full">
        <Accordion content={content} />
      </div>
    );

    const menuIcon = screen.queryAllByTestId('menuitem-testid');
    expect(menuIcon.length).not.toBe(0);

    let option = screen.queryByText(/approve/i);
    expect(option).not.toBeInTheDocument();
    option = screen.queryByText(/reject/i);
    expect(option).not.toBeInTheDocument();

    fireEvent.click(menuIcon[0]);

    option = screen.queryByText(/approve/i);
    expect(option).toBeInTheDocument();
    option = screen.queryByText(/reject/i);
    expect(option).toBeInTheDocument();

    // click outside menu
    const dowmArrow = screen.queryAllByTestId('downarrow-testid');
    fireEvent.mouseDown(dowmArrow[0]);

    option = screen.queryByText(/approve/i);
    expect(option).not.toBeInTheDocument();
    option = screen.queryByText(/reject/i);
    expect(option).not.toBeInTheDocument();
  });
});
