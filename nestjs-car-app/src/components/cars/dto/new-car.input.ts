import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export default class NewCarInput {
  //Field({nullable: true})
  @Field()
  name: string;

  @Max(20000)
  @Min(1500)
  @Field((type) => Int)
  monthlyPrice: number;

  @Field((type) => Int)
  @Max(1000)
  @Min(10, { message: "Daily price cant't be that low!" })
  dailyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
