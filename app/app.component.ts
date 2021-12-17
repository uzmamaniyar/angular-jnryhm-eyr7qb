import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <kendo-card width="360px">
            <kendo-card-body>
            <div class="contact">
                <div class="k-hstack">
                    <kendo-avatar shape="circle" ><i class="fas fa-puzzle-piece"></i> </kendo-avatar>
                    <div class="mate-info">
                        <h4>Clean Water hvbhfvsdhf jhfvh... </h4>
                    </div>
                </div>
            </div>
            <div class="k-hstack"></div>            
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sollicitudin risus eget semper. Donec tincidunt at nulla nec luctus. Proin eget odio eu dolor pretium pretium eu vitae nulla. Proin eget turpis...
                </p>
            </kendo-card-body>
            
            <kendo-card-actions orientation="horizontal" layout="stretched">
                <button class="k-button k-flat" (click)="toggleLike()">
                    <i class="fas fa-info-circle"></i>
                </button>            
                <button class="k-button k-flat" (click)="toggleLike()">
                    <i class="fas fa-book"></i>
                </button>
                <button class="k-button k-flat" (click)="toggleLike()">
                    <i class="fas fa-briefcase"></i>                    
                </button>
                <button class="k-button k-flat" (click)="toggleLike()">
                    <i class="fas fa-microscope"></i>                    
                </button>                             
                <button class="k-button k-flat" (click)="toggleLike()">
                    <i class="fas fa-globe-europe"></i>
                </button>   
                <button class="k-button k-flat" (click)="toggleLike()">
                <i class="far fa-circle"></i>
                </button>   
                <button class="k-button k-flat" (click)="toggleLike()">
                <i class="far fa-circle"></i>
                </button>   
                <button class="k-button k-flat" (click)="toggleLike()">
                <i class="far fa-circle"></i>
                </button>   
                <button class="k-button k-flat" (click)="toggleLike()">
                <i class="far fa-circle"></i>
                </button>   
                <button class="k-button k-flat" (click)="toggleLike()">
                <i class="far fa-circle"></i>
                </button>   
                <button class="k-button k-flat" (click)="toggleLike()">
                <i class="far fa-circle"></i>
                </button>   

                <button class="k-button k-flat" (click)="toggleLike()">
                    <i class="fas fa-cog"></i>
                </button>                      
            </kendo-card-actions>
            <kendo-card-footer class="k-hstack">
                <span>
                    <kendo-chip type="none">
                    Building
                    </kendo-chip>                  
                </span>
                <span>Last modified March 4, 2020</span>
            </kendo-card-footer>
        </kendo-card>
        <br />
     
      <kendo-card width="500px">
        <kendo-card-body>
              
              <div class="k-hstack">
              <h4>CAPEX</h4>
              </div>
              <kendo-chart [transitions]="false"
              renderAs="canvas"
                [pannable]="{ lock: 'y' }"
                [zoomable]="{ mousewheel: { lock: 'y' }, selection: { lock: 'y' } }"
                [categoryAxis]="categoryAxis">

                <kendo-chart-value-axis>
                <kendo-chart-value-axis-item
                                            [min]="0"  pane="pane" >
                </kendo-chart-value-axis-item>
            </kendo-chart-value-axis>
            <kendo-chart-panes>
                <kendo-chart-pane name="pane" clip="false">
                </kendo-chart-pane>
            </kendo-chart-panes>
            
            <kendo-chart-title
                    text="Gross domestic product growth /GDP annual %/"
            >
            </kendo-chart-title>
            
            <kendo-chart-category-axis>
                      <kendo-chart-category-axis-item [maxDivisions]="5">
                      </kendo-chart-category-axis-item>
            </kendo-chart-category-axis>       
            
            <kendo-chart-axis-defaults [majorGridLines]="{ visible : false}">
            </kendo-chart-axis-defaults>
            
            <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
            
            <kendo-chart-series>
              <kendo-chart-series-item
              *ngFor="let item of series"
              type="line"
              style="normal"
              [data]="item.data"
              [name]="item.name"
              [color]="item.markerBackground"
              [markers]="{ background: item.markerBackground }"
              >  
              </kendo-chart-series-item>
            </kendo-chart-series>
            
            <kendo-chart-legend position="bottom" orientation="horizontal">
            </kendo-chart-legend>
            
            <kendo-chart-x-axis>
                <kendo-chart-x-axis-item>
                  <kendo-chart-x-axis-item-labels [position]="start">
                  </kendo-chart-x-axis-item-labels>
                </kendo-chart-x-axis-item>
            </kendo-chart-x-axis>

            <kendo-chart-y-axis>
                <kendo-chart-y-axis-item>
                  <kendo-chart-y-axis-item-labels [position]="start">
                  </kendo-chart-y-axis-item-labels>
                </kendo-chart-y-axis-item>
            </kendo-chart-y-axis>
          </kendo-chart>
        </kendo-card-body>
      </kendo-card>

            <br>
            <br>
            <kendo-card width="500px">
            <kendo-card-body>
            
       
    <kendo-chart [transitions]="false"
    renderAs="canvas"
      [pannable]="{ lock: 'y' }"
      [zoomable]="{ mousewheel: { lock: 'y' }, selection: { lock: 'y' } }"
      [categoryAxis]="categoryAxis">

      <kendo-chart-value-axis>
      <kendo-chart-value-axis-item
        [min]="0"  pane="pane" >
      </kendo-chart-value-axis-item>
  </kendo-chart-value-axis>
  <kendo-chart-panes>
      <kendo-chart-pane name="pane" clip="false">
      </kendo-chart-pane>
  </kendo-chart-panes>
  <kendo-chart-category-axis>
            <kendo-chart-category-axis-item [maxDivisions]="5">
            </kendo-chart-category-axis-item>
    </kendo-chart-category-axis>       
  <kendo-chart-axis-defaults [majorGridLines]="{ visible : false}">
  </kendo-chart-axis-defaults>
    <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
    <kendo-chart-series>
    <kendo-chart-series-item
    *ngFor="let item of series"
    type="line"
    style="smooth"
    [data]="item.data"
    [name]="item.name"
    [markers]="{visible:false}"
  >
    </kendo-chart-series-item>
    </kendo-chart-series>
    <kendo-chart-legend position="bottom" orientation="horizontal">
    </kendo-chart-legend>
    <kendo-chart-x-axis>
      <kendo-chart-x-axis-item>
        <kendo-chart-x-axis-item-labels [position]="start">
        </kendo-chart-x-axis-item-labels>
      </kendo-chart-x-axis-item>
    </kendo-chart-x-axis>

    <kendo-chart-y-axis>
      <kendo-chart-y-axis-item>
        <kendo-chart-y-axis-item-labels [position]="start">
        </kendo-chart-y-axis-item-labels>
      </kendo-chart-y-axis-item>
    </kendo-chart-y-axis>
  </kendo-chart>
        </kendo-card-body>
        </kendo-card>
    `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
            .k-card-title {
                margin-bottom: 0;
            }
            img {
                width: 100%;
                height: 200px;
                background-size: cover;
            }
            .k-card-separator {
                height: auto;
            }
            p {
                text-align: justify;
                margin-top: 10px !important;
            }
            .k-avatar {
                margin-right: 1em;
            }
            .k-card-footer {
                justify-content: space-between;
            }
            .k-icon.k-i-heart {
                color: #ff6358;
            }
            .k-button {
                width: 32%;
            }
            .k-card-subtitle {
                margin: 0 0 5px 0;
            }
            .k-chip {
                margin-right: 10px;
              }            
          
            .k-chart {
                overflow: auto;
                width: 450px;
                height:320px;
              }
          
            .k-chart-surface {
                width: 700px;
                height:300px;
              }
            ::-webkit-scrollbar {
                width: 4px;
            
            }
            /* width */
            ::-webkit-scrollbar {
              width: 5px;
              height: 7px;
            }
            
            /* Track */
            ::-webkit-scrollbar-track {
              box-shadow: inset 0 0 3px grey; 
              border-radius: 10px;
            }
             
            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #686A6D; 
              border-radius: 10px;
            }
            
            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #686A6D; 
            }
        `,
  ],
})
export class AppComponent {
  public series: any[] = [
    {
      name: 'Need',
      data: [
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
      ],
      markerBackground: '#D8A7D9',
    },
    {
      name: 'Solution',
      data: [
        4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832,
        4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535,
        5.247, 7.832, 4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376,
        8.153, 8.535, 5.247, 7.832, 4.3, 4.3, 4.6666666666666666643, 7.295,
        7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3,
        4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832,
        4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535,
        5.247, 7.832, 4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376,
        8.153, 8.535, 5.247, 7.832, 4.3, 4.3, 4.6666666666666666643, 7.295,
        7.175, 6.376, 8.153, 8.535, 5.247, 7.832, 4.3, 4.3,
        4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, 7.832,
        4.3, 4.3, 4.6666666666666666643, 7.295, 7.175, 6.376, 8.153, 8.535,
        5.247, 7.832, 4.3, 4.3,
      ],
      markerBackground: '#B2CFE8',
    },
    // {
    //   name: "Germany",
    //   data: [
    //     0.01, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.69, 2.995,
    //   ],
    // },
    // {
    //   name: "World",
    //   data: [
    //     1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727,
    //   ],
    // },
  ];
  public categories: number[] = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2002, 2003,
    2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
  ];
  // tslint:disable-next-line:max-line-length
  public thumbnailSrc =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg';
  // tslint:disable-next-line:max-line-length
  public cover =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg';

  public liked = false;

  public toggleLike(): void {
    this.liked = !this.liked;
  }

  public wrenchIcon(): string {
    return this.liked ? 'k-icon k-i-wrench' : 'k-icon k-i-wrench';
  }
  public globeIcon(): string {
    return this.liked ? 'k-icon k-i-globe' : 'k-icon k-i-globe';
  }
  public stackedIcon(): string {
    return this.liked ? 'k-icon k-i-paint' : 'k-icon k-i-paint';
  }
  public gearsIcon(): string {
    return this.liked ? 'k-icon k-i-gears' : 'k-icon k-i-gears';
  }
  public heartIcon(): string {
    return this.liked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline';
  }
  // public chips = [
  //     {
  //         label: "Success",
  //         type: "success"
  //       },
  // ];
}