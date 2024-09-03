﻿// <auto-generated />
using DietPlanner.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace DietPlanner.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("DietPlanner.Models.Plan", b =>
                {
                    b.Property<int>("plan_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("plan_id"));

                    b.Property<string>("day_of_week")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ingredients")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("title_of_meal")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("type_of_meal")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("plan_id");

                    b.ToTable("plans");
                });

            modelBuilder.Entity("DietPlanner.Models.Recipe", b =>
                {
                    b.Property<int>("recipe_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("recipe_id"));

                    b.Property<int>("calories")
                        .HasColumnType("integer");

                    b.Property<string>("category")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("diet_type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("image")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("prep_time")
                        .HasColumnType("integer");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("recipe_id");

                    b.ToTable("recipes");
                });
#pragma warning restore 612, 618
        }
    }
}
